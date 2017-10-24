### Sequalize cli
Steps to use `sequalize cli`:

1. To install sequalize cli, run:
    ```$xslt
    sudo npm install -g sequelize-cli
    ```
2. To initialize `sequalize cli`, run the below command in project directory:
    ```$xslt
    sequelize init
    ```
    The above command will generate `config`, `models`, `migrations` and `seeders` folder.

3. To create Models using `sequalize cli`, run
    ```$xslt
    sequelize model:create --name ModelName --attributes title:string
    ```
    This should create a migrator file also, using this migrator you can create db tables

4. To create db using migrator, run 
    ```
    sequelize db:migrate
    ```
    
    Above command should create tb tables in given configuration db.
    
    
    