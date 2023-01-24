# StudyATHome Internationally - Hub

## Algolia

To update the search index of algolia run following command:

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat ./docs/.vuepress/config/algolia.json | jq -r tostring)" algolia/docsearch-scraper
```

To run this command, you need following tools installed: `docker`, `jq`.
Additionally, create a file `.env` and specify following variables:

```bash
APPLICATION_ID=<APP_ID>
API_KEY=<API_KEY>
```
