# Chmury-projekt
Aplikacja do porównywania rekordów osobistych speedcuberów

Radosław Tomczyk: frontend<br>
Jakub Maciej Tkaczyk: backend

## Harmonogram

1. Skonfigurowanie środowiska docker compose i repozytorium
    1.1 Wysłanie podania o klucz do API
2. Przygotowanie właściwej aplikacji
    - frontend: 
        - formularz logowania
        - profil użytkownika (dla użytkowników posiadających WCA id)
        - biblioteka do wykresów
    - backend: 
        - stworzenie schematów do bazy
        - wystawienie endpointów
        - dokumentacja z endpointów
    - baza:
        - schemat dla użytkownika (mongo)
3. Testowanie, poprawki, deploy

TechStack: MERN

## Tydzień 1
W środowisku Compose została uruchomiona testowa aplikacja napisana z wykorzystaniem stosu MERN. Zostały stworzone 3 kontenery:
- react-app: aplikacja napisana jest w react. Podczas budowania najpierw następuje kompilacja do postaci html/css/js, a następnie pliki wystawiane sa na serwer apache
- api-server: serwer NodeJS pełniący rolę RESTful API. Podczas budowania najpierw instalowane są potrzebne moduły, a następnie server node jest uruchamiany
- mongodb: baza danych mongo, w której przechowywane są dane użytkowników z testowej aplikacji

### Problemy:
- frontend: 
    - kompilacja aplikacja react w Dockerfile (rozwiązany)
    - zmiana, konfiguracja serwera (localhost, rozwiązany)
- backend: 
    - problem z instalacją node_modules z poziomu docker_compose (rozwiązany)
    - połączenie z bazą danych (rozwiązany)
- baza:
    - połączenie z bazą z hosta (rozwiązany)
    - uwierzytelnianie użytkownika (nierozwiązany)
