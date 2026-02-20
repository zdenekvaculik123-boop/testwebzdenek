

## Zapracovani vstupu z Word dokumentu

### 1. Nova sekce "Tym" (TeamSection)

Vytvorim novou komponentu `src/components/TeamSection.tsx` se dvema cleny tymu:

- **Mykola Sokolov** -- Certifikovany Scrum Master s vice nez 20 lety zkusenosti v IT (e-commerce, telekomunikace, bankovni systemy)
- **Zdenek Vaculik** -- CFO, COO/IKT manazer, projektovy manazer s vice nez 20 lety zkusenosti (investicni spolecnosti, vyrobni podniky, logistika, multi-family office, sverenske fondy)

Kazdy clen bude mit svou fotografii (z Word prilohy), jmeno a popis. Sekce bude umistena za "Pro koho" a pred "Sluzby" v `Index.tsx`.

Fotografie budou zkopirovany do `src/assets/`:
- `src/assets/team-mykola.jpg` (prvni foto -- muz v bile kosili)
- `src/assets/team-zdenek.jpg` (druhy foto -- muz v saku)

### 2. Rozsireni sekce "O nas" (AboutSection)

Do sekce AboutSection pridam vysvetleni nazvu Tekinfra:
- **Tek / Tech** -- Foneticky prepis slova "tech" (technology)
- **Infra** -- Zkracenina pro "infrastructure" (infrastruktura)

Toto bude vizualne oddeleny blok pod stavajicim textem v leve casti sekce.

### 3. Kontaktni sekce -- uprava udaju

- Adresa: pridat **"Ceska republika"** na konec adresy
- Email: zmenit z `info@tekinfra.cz` na **`info@tekinfra.eu`**

### Technicke detaily

**Nove soubory:**
- `src/components/TeamSection.tsx` -- glass-card styl konzistentni s ostatnimi sekcemi, dve karty vedle sebe (na mobilu pod sebou), fotografie v kruhovem formatu
- `src/assets/team-mykola.jpg` (kopie z uploadu)
- `src/assets/team-zdenek.jpg` (kopie z uploadu)

**Upravene soubory:**
- `src/pages/Index.tsx` -- import a pridani `<TeamSection />` za ForWhomSection
- `src/components/AboutSection.tsx` -- pridani bloku s vysvetlenim nazvu Tekinfra
- `src/components/ContactSection.tsx` -- radek 52: email na `info@tekinfra.eu`, radek 54: pridani "Ceska republika" do adresy

