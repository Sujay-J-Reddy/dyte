from aiohttp import web
import aiohttp

elasticsearch_service_name = "elasticsearch-service"  # Update with your service name
index_name = "logs"

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

app = web.Application()
app.router.add_post('/ingest-log', handle_log)

if __name__ == '__main__':
    web.run_app(app, port=3000)
