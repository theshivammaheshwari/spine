import urllib.request
import re

url = "https://www.youtube.com/@drHarshvardhanchiropactor/videos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    video_ids = re.findall(r'"videoId":"(.*?)"', html)
    # filter out duplicates
    unique_ids = list(dict.fromkeys(video_ids))
    print("Found IDs:", unique_ids[:10])
except Exception as e:
    print("Error:", e)
