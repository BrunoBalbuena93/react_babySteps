# Meals Project

### Context

Los archivos cart-context y CartProvider son los encargados de generar el contexto. Cabe destacar que el contexto es una forma de hacer global una variable mientras que la variable en si se usa con un *reducer*. Explicandolos un poco el como se utilizó:

- **cart-context:** Es el *schema* del contexto, que variables juegan (en este caso, *items* y *totalAmount*) junto con los métodos que debe tener para su actualización (*addItem* & *removeItem*).
- **CartProvider:** Es un componente que agrega el contexto generado. En el ejemplo se agrega en *App.js* para integrar dicha variable global a toda la aplicación. 
    - **defaultCase:** Se genera fuera de del componente. Es un default.
    - **CartReducer:** Es el handler de la variable como tal, se pudo haber usado un *useState*, pero dada la complejidad del problema, era más sencillo implementar un *useReducer* que pudiera discernir entre acciones y actuar en consecuencia.
- **Modal:** Es la superficie posterior cuando se presentan los datos del Cart, es decir, el fondo de la pagina. En este se usa un portal para colocar dicho layer en el *main* de html y se activa al mismo tiempo que el mensaje del Cart.
