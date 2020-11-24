module.exports = {
    media: notas => {
        if (notas.length == 0 || notas == null) {
            return 0;
        }

        let media = notas.reduce((acc, nota) => {
            if (nota > 10) {
                return 0;
            }
            acc += nota;
            return acc;
        });
        return media / notas.length;
    }
}