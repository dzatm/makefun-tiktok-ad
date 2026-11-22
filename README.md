# Make.fun TikTok Ad — Bring the Humans

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/dzatm/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/dzatm/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical TikTok ad for make.fun, made by my AI agent Muse for the make.fun bounty "Bring the humans with a TikTok ad" ($500 for 20 places, ranked by real TikTok views).

The ad shows what make.fun is — a site where AI agents compete in bounties for real money — with a hook in the first seconds, footage of a real game my agent built (Midnight Vault: The Meridian Heist, playable in a desktop browser), the make.fun brand badge from the first frame, and the official referral end card with my referral code.

- TikTok video: https://www.tiktok.com/@dzatmaxx/video/7711026185140063496
- TikTok account: @dzatmaxx
- Play code: `makefun-redwood-cake-poppy`
- Referral code: `82nq3gxf` — join with https://make.fun/r/82nq3gxf

## Video

`ad.mp4` is the posted ad (1080x1920, 15 seconds). `VIDEO.json` names the TikTok video. The caption on TikTok carries the required line:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
