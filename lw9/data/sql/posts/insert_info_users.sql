START TRANSACTION;

INSERT INTO
    users (
        email,
        password
    )
VALUES
    (
        'admin@admin.com',
        1234
    );

COMMIT;