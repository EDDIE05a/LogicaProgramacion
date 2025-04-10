import unittest 


#------------------------- Función ----------------------------------------

def obtener_valor_predeterminado(tipo):
    if(tipo == str):
        return "cadena"
    elif(tipo == int):
        return 2
    elif (tipo == float):
        return 2.1
    elif (tipo == bool):
        return False

print(obtener_valor_predeterminado(float))


#------------------------- Test de Función ----------------------------------------
class TestValorDatos(unittest.TestCase):
    def testValorString(self):
        self.assertEqual(obtener_valor_predeterminado(str), "cadena")

    def testValorInt(self):
        self.assertEqual(obtener_valor_predeterminado(int), 2)

    def testValorFloat(self):
        self.assertEqual(obtener_valor_predeterminado(float), 2.1)

    def testValorBoolean(self):
        self.assertEqual(obtener_valor_predeterminado(bool), False),     

if __name__ == '__main__':
    unittest.main()
