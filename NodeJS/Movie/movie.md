## Movie Data Base

### 1.Create a new database name "MovieDB" in Mongo DB

```shell
use movieDB;
```

### 2. Create three collections: "movies","directors", & "actors".

```
db.createCollection("movies");
db.createCollection("directors");
db.createCollection("actors");
```

### 3. Schema

#### a. Movie Collection Schema:- 

```md
- title (string)
- releasedYear (string)
- genre (list of string)
- director (refernce to directors)
- actors (list of references to Actors)
```

#### b. Directors collection schema:-

```md
- name (string)
- nationality (string)
- moviesDirected (list of references to Movies)
```
#### c. Actors collection schema:-

```md
- name (string)
- nationality (string)
- moviesActedIn (list of references to Movies)
```