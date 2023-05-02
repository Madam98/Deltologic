
# Backend


## Opis problemu i rozwiązania

Do napisania backendu został wykorzystany Nodejs oraz TypeScript. Do stworzenia prostych testów jednostkowych został wykorzystany framework Jest. 

W celu przyjmowania tablicy w celu obliczenia objętości wody został wykorzystany framework express.js w celu łatwiejszego i szybszego stworzenia architektury REST. Do przyjmowania i odsyłania komunikatów została użyta metoda POST. Sposób implementacji obliczenia objętości znajduje się w pliku *waterVolume.ts*

## Uruchomienie kontenera
Jeśli chcemy oddzielnie uruchomić kontener backendu możemy to zrobić za pomocą dwóch poleceń:

```
docker build -t backend .
```

w celu zbudowania obrazu oraz

```
docker run -p 5000:5000 backend
```

w celu uruchomienia kontenera nasłuchującego na porcie 5000. Jeśli chcemu uruchomić kontener tylko w celu wykonania testów należy wpisać:

```
docker run -p 5000:5000 backend npm test
```

## Uruchamianie kodu lokalnie
Jeśli chcemy uruchomić oraz modyfikować nasz dany kod lokalnie należy zainstalować wszystkie potrzebne paczki poleceniem z danego miejsca w repozytorium:

```
npm install
```

oraz urchomić poleceniem:

```
npm start
```

Możliwe jest również wykonanie testów poleceniem

```
npm test
```
