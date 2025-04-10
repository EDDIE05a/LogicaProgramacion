import unittest
 
def calificacion(nota):
    if nota < 0 or nota > 100:
        return "Nota inválida"
    elif nota >= 90:
        return "Excelente"
    elif nota >= 70:
        return "Bueno"
    elif nota >= 60:
        return "Suficiente"
    else:
        return "Insuficiente"

print(calificacion(42))


class TestCalificacion(unittest.TestCase):
    
    def test_NotaInvalida(self):
        self.assertEqual(calificacion(102), "Nota inválida")
    def test_NotaExcelente(self):    
        self.assertEqual(calificacion(92), "Excelente")
    def test_NotaBuena(self):
        self.assertEqual(calificacion(70), "Bueno")
    def test_NotaSuficiente(self):
        self.assertEqual(calificacion(69), "Suficiente")
    def test_NotaInsuficente(self):
        self.assertEqual(calificacion(49),"Insuficiente")

if __name__ == '__main__':
    unittest.main()