

## SQL 

### Migrations

#### Create a new Migration (On Development)

```bash
npm run knex-dev migrate:make migration_name
```

#### Running migrations

```bash
npm run knex-dev migrate:latest
```

#### Rollback

```bash
npm run knex-dev migrate:rollback
```

#### Create a new seed

```bash
npm run knex-dev seed:make seed_name
```

#### Running Seed

```bash
npm run knex-dev seed:run
```