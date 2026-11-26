# Recorded sounds: credits and licences

Flyby Sydney's footsteps (`steps/`) are made from these recordings. All three sources are released under
**Creative Commons CC0 1.0** (public domain dedication, https://creativecommons.org/publicdomain/zero/1.0/).
Credit is not required. We give it anyway.

| Files | Source | Author | Licence |
|---|---|---|---|
| `steps/stone-left.*`, `steps/stone-right.*` | Fantozzi's Footsteps (Grass/Sand & Stone): `Fantozzi-StoneL1`–`L3` (left foot), `Fantozzi-StoneR1`–`R3` (right foot), from the FLAC originals. https://opengameart.org/content/fantozzis-footsteps-grasssand-stone | Fantozzi (submitted by qubodup) | CC0 1.0 |
| `steps/sand-left.*`, `steps/sand-right.*` | Fantozzi's Footsteps (Grass/Sand & Stone): `Fantozzi-SandL1`–`L3` (left foot), `Fantozzi-SandR1`–`R3` (right foot), from the FLAC originals. https://opengameart.org/content/fantozzis-footsteps-grasssand-stone | Fantozzi (submitted by qubodup) | CC0 1.0 |
| `steps/concrete.*`, `steps/grass.*`, `steps/wood.*` | Impact Sounds 1.0: `footstep_concrete_000`–`004`, `footstep_grass_001`–`002`, `footstep_wood_000`–`004`. https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `steps/board.*` | Impact Sounds 1.0: `impactWood_light_000`–`004`. https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `steps/carpet.*` | Impact Sounds 1.0: `footstep_carpet_000`, `001`, `003` (the pack's `002` and `004` repeat `001` and `003`). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `steps/grains.*` | Water Splash and sand footsteps: `sand_footsteps_0.mp3` (8 of its 13 steps). https://opengameart.org/content/water-splash-and-sand-footsteps | Peludo | CC0 1.0 |
| `steps/wet.*` | Water Splash and sand footsteps: `splash1_0.wav`, `splash2_0.wav` (the first 90 ms of five hits). https://opengameart.org/content/water-splash-and-sand-footsteps | Peludo | CC0 1.0 |
| `ui/found-chime.*` | Wind Chimes (Freesound pack 22415): `wind chimes - single 04.wav` (https://freesound.org/people/Anthousai/sounds/398496/) and `wind chimes - single 03.wav` (https://freesound.org/people/Anthousai/sounds/398492/), from Freesound's high-quality previews. | Anthousai | CC0 1.0 |

Peludo's page asks games that use the sounds to reference the author's itch.io page. That page is not linked
from the OpenGameArt entry (and the author's OpenGameArt profile could not be read on 21 Nov), so we credit Peludo
by name and link the OpenGameArt entry. Add the itch.io link here once it is known.

Fantozzi's takes come from Fantozzi's footstep pack on Freesound
(https://www.freesound.org/people/Fantozzi/packs/10338/, also CC0), as the OpenGameArt entry says. The carpet steps
(`steps/carpet.*`) and Peludo's grains (`steps/grains.*`) play only when a Fantozzi sand bank cannot be loaded
(sand's fallback). The concrete steps are the body under the stone steps, and on their own they are the fallback of
paving, road and stairs when a Fantozzi stone bank cannot be loaded.

Each `steps/` file holds one bank: the takes back to back, separated by silence. The takes are high-passed,
trimmed to the onset, faded and loudness-matched. Each bank is published as Ogg Opus (`.ogg`) and as AAC in MP4
(`.m4a`). The game uses the format the browser plays. The originals, the licence texts and the conversion script
are in `flyby-sydney-lab/audio-sources/` (not published), with the full CC0 1.0 legal code.

The "found it" chime (`ui/found-chime.*`, the first time you reach a place) is two tubes of Anthousai's wind
chimes, each a single hit recorded with a Tascam DR-40: the low tube (486 Hz) and the tube a major third above it
(604 Hz). Both pages give CC0 and ask for no credit. Freesound's WAV originals need a sign-in, so the bank is made
from the pages' high-quality MP3 previews, high-passed at 150 Hz, trimmed, faded and loudness-matched like the
steps (`flyby-sydney-lab/audio-sources/convert-chime.mjs`).

## The car (`car/`)

The car's doors, starter, kerbs, landings and crashes (`car/`) are made from these recordings, both released under
**Creative Commons CC0 1.0** (https://creativecommons.org/publicdomain/zero/1.0/). Credit is not required. We give
it anyway. The engine note, road roar, tyres, indicator and handbrake are synthesised.

| Files | Source | Author | Licence |
|---|---|---|---|
| `car/door.*` | Impact Sounds 1.0: `impactPlate_medium_000`, `002`, `003`, `004` (the door's thunk). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/latch.*` | Impact Sounds 1.0: `impactMetal_medium_001`, `002`, `004` (the latch). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/panel.*` | Impact Sounds 1.0: `impactPlate_heavy_000`, `001`, `002`, `004` (the body's weight). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/thud.*` | Impact Sounds 1.0: `impactPunch_medium_000`–`004` (a tyre's thud on a kerb). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/knock.*` | Impact Sounds 1.0: `impactGeneric_light_000`–`004` (the wheel's and the suspension's knock). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/boom.*` | Impact Sounds 1.0: `impactPunch_heavy_000`–`003` (a landing's and a crash's weight). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/crunch.*` | Impact Sounds 1.0: `impactMetal_heavy_000`–`004` (the bodywork meeting a wall). https://kenney.nl/assets/impact-sounds | Kenney (www.kenney.nl) | CC0 1.0 |
| `car/starter.*` | Car engine start 01: `generic_car_startengine.wav` (its cranking, cut after the 4th, 5th and 6th compression stroke). https://opengameart.org/content/car-engine-start-01 | looneybits | CC0 1.0 |

Each `car/` file holds one bank, made like the steps (high-passed, trimmed to the onset, faded, loudness-matched,
Ogg Opus and AAC in MP4) by `flyby-sydney-lab/audio-sources/convert.mjs`, where the originals and the licence texts
are kept.

## Luna Park's rides (`rides/`)

The carousel's band organ and the riders' screams at Luna Park (`rides/`) are made from these recordings, all released
under **Creative Commons CC0 1.0** (https://creativecommons.org/publicdomain/zero/1.0/), as each page stated on
25 Nov 2026. Credit is not required. We give it anyway. The coasters' roll and clatter, the chain lift, the launches,
the Hair Raiser and Volaré's chairs are synthesised.

| Files | Source | Author | Freesound ID | Licence |
|---|---|---|---|---|
| `rides/organ.*` | Large Band Organ at Carousel (Griffith Park merry-go-round): one strain (56.5 s) of its third song, "Over the Waves Waltz" (Juventino Rosas, 1888, public domain). The page names that song; the others are untitled and not used. https://freesound.org/people/CHallSmith/sounds/870752/ | CHallSmith | 870752 | CC0 1.0 |
| `rides/screams.*` (take 1) | scream ride start.aif. https://freesound.org/people/martian/sounds/19346/ | martian | 19346 | CC0 1.0 |
| `rides/screams.*` (takes 2 and 3) | coaster 01.aiff (roller coaster screams passes), 2.15–4.15 s and 35.4–37.4 s. https://freesound.org/people/martian/sounds/19344/ | martian | 19344 | CC0 1.0 |
| `rides/screams.*` (take 4) | SCB005_Rollercoaster001.wav (Santa Cruz Beach Boardwalk), 1.05–3.25 s. https://freesound.org/people/tec_studio/sounds/98182/ | tec_studio | 98182 | CC0 1.0 |

Three more CC0 recordings were downloaded with these, to judge the synthesised voices against, and are not in the
game: Rollercoaster ratchet.wav by esperar (171510), roller coaster field recording by Garuda1982 (535910), and funfair
France people passing by.wav by barkenov (406825).

The banks are made from the pages' high-quality MP3 previews (Freesound's originals need a sign-in) by
`flyby-sydney-lab/audio-sources/convert-rides.mjs`. The organ's strain is high-passed and its end crossfaded into the
music before its start, so it loops without a seam, followed by its first 3 s again. The screams are high-passed at
300 Hz, faded and loudness-matched. Each bank is published as Ogg Opus (`.ogg`) and as AAC in MP4 (`.m4a`), and the
game uses the format the browser plays. The previews themselves are not kept in the repository.
