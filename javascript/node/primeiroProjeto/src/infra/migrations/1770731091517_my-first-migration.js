
export const up = (pgm) => {
    pgm.createTable("selecao", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },

        selecao: {
            type: "varchar(40)",
            notNull: true,
            unique: true,
        },

        grupo: {
            type: "varchar(1)",
            notNull: true,
        },

        create_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("timezone('utc', now())")
        },

        update_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("timezone('utc', now())")
        }

    })
};

export const down = false;
