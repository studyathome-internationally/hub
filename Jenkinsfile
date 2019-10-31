pipeline {
  parameters {
    booleanParam(name: 'release', defaultValue: true, description: 'Deploy build to github.io')
    booleanParam(name: 'next', defaultValue: false, description: 'Deploy build to github.io (next)')
    booleanParam(name: 'store', defaultValue: false, description: 'Store build')
    password(name: 'GH_TOKEN', defaultValue: '', description: 'Github user token. Note: don\'t use a password, will be logged to console on error. Required for: deploy_io, release.')
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11', 'node:12'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'hub')
  }
  triggers {
    // pollSCM('H/15 * * * *')
    pollSCM('* * * * *')
  }
  agent none
  stages {
    stage('Cleanup') {
      agent {
        label params.agent
      }
      steps {
        deleteDir()
      }
    }
    stage('Build') {
        when { 
          anyOf { 
              equals expected: true, actual: params.release
              equals expected: true, actual: params.store
          }
        }
        agent {
          docker {
              image params.image
              label params.agent
          }
        }
        environment {
          BASE = "/hub-public/"
        }
        steps {
          sh '''
              yarn --no-lockfile && yarn build
          '''
        }
    }
    stage('Build (next)') {
        when { 
          anyOf { 
              equals expected: true, actual: params.next
              equals expected: true, actual: params.store
          }
        }
        agent {
          docker {
              image params.image
              label params.agent
          }
        }
        environment {
          BASE = "/hub-public/next/"
        }
        steps {
          sh '''
              yarn --no-lockfile && yarn build
          '''
        }
    }
    stage('Prepare: Store') {
      when { 
        anyOf {
          equals expected: true, actual: params.store
        }
      }
      agent {
        label params.agent
      }
      steps {
        sh 'cd build && zip -r ../hub.zip *'
      }
    }
    stage('Output') {
      parallel {
        stage('Release: Github IO') {
          when {
            equals expected: true, actual: params.release
          }
          agent {
            label params.agent
          }
          steps {
            sh '''
              git clone -b master --single-branch https://github.com/studyathome-internationally/hub-public.git gh-pages
              mv gh-pages/next next-backup
              rm -rf gh-pages/*
              cp -r build/* gh-pages/
              mv next-backup gh-pages/next
              cd gh-pages
              git add .
              git add -u .
              git -c user.name='Mr. Jenkins' -c user.email='studyathome@technikum-wien.at' commit -m 'docs: release hub'
              git push -f https://$GH_TOKEN@github.com/studyathome-internationally/hub-public.git
            '''
          }
        }
        stage('Release: Github IO (next)') {
          when {
            equals expected: true, actual: params.next
          }
          agent {
            label params.agent
          }
          steps {
            sh '''
              git clone -b master --single-branch https://github.com/studyathome-internationally/hub-public.git gh-pages
              rm -rf gh-pages/next/*
              cp -r build gh-pages/next
              cd gh-pages/next
              git add .
              git add -u .
              git -c user.name='Mr. Jenkins' -c user.email='studyathome@technikum-wien.at' commit -m 'docs: release hub'
              git push -f https://$GH_TOKEN@github.com/studyathome-internationally/hub-public.git
            '''
          }
        }
        stage('Store') {
          when {
            equals expected: true, actual: params.store
          }
          agent {
            label params.agent
          }
          steps {
            archiveArtifacts artifacts: 'hub.zip', fingerprint: true
          }
        }
      }
    }
  }
}