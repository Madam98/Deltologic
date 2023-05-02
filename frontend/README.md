
# Frontend

## Opis problemu i rozwiązania

Do napisania frontendu został wykorzystany React oraz TypeScript. Do wizualizacji rysowanej przestrzeni został wykorzystany framework Threejs (w celu uproszczenia projektu zrezygnowano z niepotrzebnych shaderów wpływających na wygląd końcowy). Do stworzenia prostych testów jednostkowych został wykorzystany framework Jest. 

Po wpisaniu przez użytkownika oczekiwanego wyglądu tablicy przestrzeń, w którym ma znajdować się woda, jest obliczana w pliku *findWaterBlocks*. Sposób znajdywania miejsca, w którym moze znajdować się woda opiera się na znajdywaniu pustych punktów w stworzonej tablicy, a następnie szukaniu lewych i prawych najwyższych "słupów" w celu poprawnego stwierdzenia czy woda może się tam znaleźć. Wygląd i renderowanie sceny za pomocą Canvas znajduje się w pliku *scene*. Reszta funkcjonalności jak i komponent główny strony i opis styli znajduje się w *App*.

## Uruchomienie kontenera
Jeśli chcemy oddzielnie uruchomić kontener backendu możemy to zrobić za pomocą dwóch poleceń:

```
docker build -t frontend .
```

w celu zbudowania obrazu oraz

```
docker run -p 80:3000 frontend
```

w celu uruchomienia kontenera nasłuchującego na porcie 80. Wygląd strony możemy podejrzeć wchodząc na stronę **localhost:80**. W przypadku gdy mamy juz uruchomiony kontener backendowy strona powinna zwracać poprawny wynik obliczania objętości.
Jeśli chcemu uruchomić kontener tylko w celu wykonania testów należy wpisać:

```
docker run -p 80:3000 frontend npm test
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
