from aiohttp import web
import asyncio
import aiohttp
import json
from datetime import datetime

elasticsearch_url = "http://192.168.49.2:30991"
index_name = "myapp-logs"

async def handle_log(request):
    log_entry = await request.text()
    headers = {'Content-Type': 'application/json'}
    url = f"{elasticsearch_url}/{index_name}/_doc"

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
