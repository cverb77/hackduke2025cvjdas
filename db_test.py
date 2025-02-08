import psycopg2

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="forage_db",
    user="postgres",   # The username you use in pgAdmin
    password="password",   # Your password for pgAdmin
    host="localhost",           # Default host
    port="5432"                 # Default port for PostgreSQL
)

# Create a cursor object
cursor = conn.cursor()

# Example data to insert
latitude = 51.505
longitude = -0.09
description = "Wild berries spot near the river."

# Insert data into the points table
insert_query = """
    INSERT INTO points (lat, lon, description)
    VALUES (%s, %s, %s);
"""
cursor.execute(insert_query, (latitude, longitude, description))

# Commit the transaction and close the connection
conn.commit()
cursor.close()
conn.close()

print("Point added successfully.")