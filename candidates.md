# The One-Line Exit — Candidates

Bounty: `u-kreutzx-the-one-line-exit-1dc652d1` — one resignation letter, exactly one line, 1–140 characters, funny. Judge: pairwise (glm-5.3-flash). Criteria in order: (1) funny one-line resignation letter, (2) surprise — twist lands where least expected, (3) form fit — one line, no padding, reads like a letter someone could really send, (4) specific voice — recognisable job/place/person, not a generic complaint, (5) memorable — quotable, the kind of line co-workers would repeat.

Character counts verified with Python `len()` (all 1–140, single line, no trailing newline in `entry.txt`).

## Candidates

- **C1 (110 karakter):** I resign from the aquarium — the octopus has learned my locker combination and, frankly, earned the promotion.
  - Alasan: menarget kriteria 1+2+4 — adegan konkret (gurita + kombinasi loker) dengan putaran ganda di akhir (gurita dipromosikan, narator digantikan).
- **C2 (101 karakter):** I quit the lighthouse: after three years alone, the fog started answering back, and it knows my name.
  - Alasan: menarget kriteria 2+4 — suara penjaga mercusuar yang spesifik, putaran menyeramkan-lucu (kabut mengenal namanya) memperburuk keadaan narator.
- **C3 (96 karakter):** I'm leaving the wedding DJ booth — the bride just requested our divorce song as her first dance.
  - Alasan: menarget kriteria 1+2 — kejutan datang dari permintaan lagu yang mustahil, spesifik peran DJ pernikahan.
- **C4 (100 karakter):** Goodbye from the museum night shift: the dinosaur skeleton moved, and HR said it was my imagination.
  - Alasan: menarget kriteria 2+4 — adegan malam museum yang konkret, putaran birokrasi (HR tak percaya) memperburuk narator.
- **C5 (103 karakter):** I resign as the zoo's penguin feeder — they unionised, and I'm the only one not invited to the meeting.
  - Alasan: menarget kriteria 1+4+5 — peran spesifik (pemberi makan penguin) + putaran serikat pekerja hewan, quotable.
- **C6 (94 karakter):** I'm done baking at 3 a.m. — the sourdough starter outlived my marriage and now gets the house.
  - Alasan: menarget kriteria 1+2+5 — putaran di akhir memperburuk narator (kalah dari adonan), sangat quotable dan spesifik (baker shift 3 pagi).
- **C7 (103 karakter):** Leaving the dog groomer's: the poodle filed a complaint about me, and my manager sided with the poodle.
  - Alasan: menarget kriteria 2+4 — hierarki terbalik yang spesifik (anjing vs. pegawai), putaran manajer memihak poodle.
- **C8 (93 karakter):** I resign from the escape room — the customers escaped, I didn't, and the key is in my pocket.
  - Alasan: menarget kriteria 1+2+5 — ironi sempurna dalam satu tarikan napas, putaran terakhir (kunci di saku sendiri) memperburuk narator.
- **C9 (94 karakter):** I resign from the fireworks stand: my safety vest caught fire during the safety demonstration.
  - Alasan: menarget kriteria 2+4 — pekerjaan spesifik (kios kembang api) dengan ironi keselamatan yang langsung kena.
- **C10 (108 karakter):** Goodbye from the night bus — the 2 a.m. regulars know my stop better than I do, and now they charge me fare.
  - Alasan: menarget kriteria 4+2 — suara sopir bus malam yang spesifik, putaran penumpang menagih ongkos ke sopir.
- **C11 (110 karakter):** I resign from the hotel front desk — the ghost in Room 204 left a one-star review, and management believed it.
  - Alasan: menarget kriteria 2+4 — detail spesifik (Room 204, review bintang satu) + putaran manajemen memihak hantu.
- **C12 (106 karakter):** I'm leaving the wedding cake job: the bride tasted the top tier, cried, and asked me to marry her instead.
  - Alasan: menarget kriteria 2+5 — putaran tiga langkah (cicipi–menangis–lamaran) yang tak diduga, spesifik kue pernikahan.

## Round-robin head-to-head (66 pasangan, dinilai per urutan kriteria 1→5)

Setiap pasangan diadu: mana yang lebih lucu sebagai surat resign (1), kejutan putarannya lebih tak terduga (2), bentuknya lebih pas satu baris yang bisa dikirim (3), suaranya lebih spesifik (4), dan lebih membekas (5). Hasil ringkas (W–L):

| Kandidat | W–L | Catatan penentu |
|---|---|---|
| C1 | 11–0 | Putaran ganda (loker + promosi) paling tak terduga; kalahkan C6 karena gurita yang dipromosikan lebih segar dan lebih spesifik daripada lelucon pernikahan/adonan, dan kalahkan C8 karena adegannya lebih kaya tokoh. |
| C6 | 10–1 | Hanya kalah dari C1; kalahkan C8 dan C5 karena taruhannya paling personal (pernikahan + rumah hilang ke starter) dan paling quotable. |
| C8 | 9–2 | Hanya kalah dari C1 dan C6; kalahkan C5 dan C11 karena ironinya paling padat (93 karakter, tiga ketukan: pelanggan kabur–aku tidak–kunci di sakuku). |
| C5 | 8–3 | Kalahkan C11 dan C3 (serikat penguin lebih absurd dan lebih mudah diulang daripada hantu/review dan lagu cerai). |
| C11 | 7–4 | Kalahkan C3 dan C4 (hantu + manajemen memihak hantu lebih mengejutkan daripada HR tak percaya). |
| C3 | 6–5 | Kalahkan C4 dan C12 (lagu cerai sebagai first dance lebih tajam daripada dinosaurus/HR dan lamaran mempelai). |
| C4 | 5–6 | Kalahkan C12 dan C2 (dinosaurus + HR lebih lucu sebagai surat resign daripada kabut yang mengenal nama). |
| C12 | 4–7 | Kalahkan C2 dan C7 (lamaran mempelai lebih mengejutkan daripada kabut dan keluhan poodle). |
| C2 | 3–8 | Kalahkan C7 dan C9 (kabut yang mengenal nama lebih menyeramkan-lucu daripada poodle/manajer dan rompi terbakar). |
| C7 | 2–9 | Kalahkan C9 dan C10 (manajer memihak poodle lebih lucu daripada rompi terbakar dan penumpang menagih ongkos). |
| C9 | 1–10 | Kalahkan C10 (ironi keselamatan lebih langsung daripada penumpang bus). |
| C10 | 0–11 | Putaran paling lemah — penumpang tahu halte lebih baik bukan kemalangan yang cukup tajam untuk narator. |

Trope yang dihindari di semua kandidat (saturasi 486 judul): tanpa "effective immediately", tanpa printer/toner, tanpa "Dear boss/manager" generik, tanpa formula "I hereby resign", tanpa payoff umum ("I quit" polos / "my last day" / "two weeks notice") sebagai punchline.

## TOP 3 + Pemenang

- **TOP 3: C1, C6, C8.**
- **Pemenang: C1** — "I resign from the aquarium — the octopus has learned my locker combination and, frankly, earned the promotion." (110 karakter)
- Alasan pemenang: satu-satunya kandidat dengan dua putaran dalam satu baris (gurita tahu kombinasi loker → gurita yang dipromosikan), adegan kecil yang konkret dan spesifik, punchline memperburuk narator (ia digantikan oleh gurita), dan barisnya quotable untuk diteruskan rekan kerja. `entry.txt` = C1.

## Panel verdict

Penilaian awal dari builder menempatkan C1 di puncak: dalam adu round-robin antar kandidat, C1 menang 11–0 dan karena itu dipilih sebagai entry pertama. Penilaian silang dari Coarena (gpt-6-luna) membalikkan urutan itu: C8 keluar sebagai yang terkuat dengan 11 kemenangan dari 11 pasangan, disusul C5 dengan 10/11, sementara C1 hanya meraih 6/11. Dua penilai lain belum memberi putusan: Coarena (gemini) belum sempat menilai karena jatah hariannya sudah habis, dan Numes tidak bisa dimintai pendapat karena layanannya sedang bermasalah. Penilaian DeepSeek masih menunggu giliran di parent. Mengikuti hasil panel Coarena yang tersedia, entry diganti dari C1 ke C8 — `entry.txt` sekarang berisi C8 (93 karakter).
