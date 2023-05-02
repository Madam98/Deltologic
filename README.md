
# Deltologic Tech Task

Projekt rekrutacyjny do Deltologic.


## Opis

Opis użytych technologii został zawarty w folderze backend oraz frontend. W przypadku chęci uruchomienia równocześnie obrazu backendowego i frontendowego można wykorzystać w tym celu stworzony docker-compose. Znajdując się w danym miejscu w repzozytorium wystarczy wpisać:

```bash
  docker-compose up
```

W folderze ./github/workflows znajduje się plik main.yml implementujący budowanie oraz testowanie kontenerów backendowych i frontendowych osobno oraz budowanie i publikowanie danych obrazów na moim repozytorium w dockerhub.

https://hub.docker.com/repository/docker/adammiernicki/deltologicfrontend
https://hub.docker.com/repository/docker/adammiernicki/deltologicbackend/general
