from aiohttp import web
import aiohttp

# Elasticsearch service and index configuration
elasticsearch_service_name = "elasticsearch-service"
index_name = "logs"

# Request handler for log ingestion
async def handle_log(request):
    log_entry = await request.text()
    headers = {'Content-Type': 'application/json'}
    url = f"http://{elasticsearch_service_name}:9200/{index_name}/_doc"

    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=log_entry, headers=headers) as response:
                response.raise_for_status()
                return web.Response(text=f"Log ingested successfully: {await response.text()}")
    except aiohttp.ClientError as e:
        return web.Response(text=f"Failed to ingest log: {e}", status=500)

# Aiohttp web application setup
app = web.Application()
app.router.add_post('/ingest-log', handle_log)

# Run the web application on port 3000
if __name__ == '__main__':
    web.run_app(app, port=3000)
