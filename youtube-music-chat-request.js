// Use the finite chat endpoint, retaining the client's context and continuation.
// The response hook restores the interactivity envelope after hiding metrics.
const output = {
  url: $request.url.replace(/\/get_live_interactivity(?=\?|$)/, "/get_live_chat") +
    ($request.url.includes("?") ? "&" : "?") + "metrics_interactivity=1",
}
const wait = Number($persistentStore.read("youtube-metrics-chat-next") || 0) - Date.now()
if (Number.isFinite(wait) && wait > 0) setTimeout(() => $done(output), Math.min(wait, 10000))
else $done(output)
