# Angular

ng serve : Inicia el proyecto en modo dev
            --port PUERTO : Indicar el puesto de forma manual

ng --version : Hace cómo un analisis del proyecto y te muestra toda la info con sus versiones

ng build --prod : Hace un bundle en modo Prod

USO DE ngIf : La directiva ngIf se usa generalmente en forma abreviada *ngIf.
En base a una condicional
<div *ngIf="condition">
    Content to render when condition is true
<div>

USO DE ngFor : Se usa generalmente cómo ngForOf, nos sirve para hacer una iteración de un Array


ng lint ==> Para hacer un checkeo a tu codigo si cumple con el linter

GENERADORES

Generar un componente : ng g c <Nombre_del_Componente>