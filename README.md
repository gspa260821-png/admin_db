# Actividad Integradora 3 DB SHOP

Solucion T-SQL para fortalecer el modelo DB_SHOP, definir seguridad por roles, crear vistas y procedimientos de mantenimiento, e integrar los pedidos del canal Tienda Online.

## Ejecucion

1. Verificar que exista la base `DB_SHOP` de la Actividad 2.
2. Copiar `pedidos_online.csv` a `C:\\ETL\\pedidos_online.csv` o cambiar la ruta declarada al inicio del script.
3. Ejecutar `Estudiante_Actividad3.sql` con una cuenta de SQL Server con permisos de administracion de base y servidor.
4. Consultar las pruebas y respuestas del Bloque 6 al final del archivo.

El archivo CSV se incluye solo como fuente local para el proceso ETL. No hay credenciales dentro de este repositorio.

## Panel web de apoyo

Ejecute `docker compose up -d` dentro de esta carpeta y abra `http://localhost:8091/panel_sql/`. El panel organiza el deber en sus seis bloques, permite copiar cada bloque y descargar el script completo. La ejecución T-SQL se realiza en SQL Server Management Studio contra la base DB_SHOP de la Actividad 2.
