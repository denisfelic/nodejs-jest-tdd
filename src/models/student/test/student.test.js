
const student = require('../student');

describe('Student tests', () => {
    it('Deve retornar zero caso o aluno não tenha nenhuma nota', () => {
      const notas = [];
      expect(student.media(notas)).toEqual(0);
    });

    it('deve retornar média 6.75, caso as notas sejam 7,8,5,7', () => {
        const notas = [7,8,5,7];
        expect(student.media(notas)).toEqual(6.75);
    });

    it('deve retornar zero, caso alguma nota seja maior que 10', () => {
        const notas = [6,6,7,10,12];
        expect(student.media(notas)).toEqual(0);
    });

});