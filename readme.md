# Solventa Colombia

_Proyecto inicial para solventa Frontend SAS Colombia._

## Comenzando 🚀

_Estas instrucciones te permitirán instalar y configurar todo lo necesario para correr el proyecto._

### Pre-requisitos 📋

_Para correr composer, git, npm, etc en windows por powershell (terminal de windows)_
_en el caso que queramos trabajar localmente, necesitaremos instalar una serie de programas._

## Programas a instalar para actualizar repositorios y dependencias 🔧

_Terminal de GIT para windows:_
```
https://git-scm.com/download/win
```

_Gestor de paquetes NPM para windows:_
```
https://nodejs.org/en/
```

_Gestor de paquetes COMPOSER para windows:_
```
https://getcomposer.org/Composer-Setup.exe
```

_Con estas 3 herramientas estariamos listos para correr comandos de git localmente,_
_comandos del gestor de paquetes composer y comandos del gestor de paquetes npm,_
_muy importantes a la hora de actualizar paquetes y gestionar dependencias._

## Requisitos para instalar librerias de codeigniter 🔧

_Para instalar todas las librerias y sus dependencias del proyecto en codeigniter_
_debemos correr el siguiente comando:_

_si es la primera vez que descargamos el proyecto:_
```
composer install
```

_para actualizar el proyecto local:_
```
composer update
```

## Requisitos para configurar e instalar Vuejs 🔧

_Descarga de paquetes de Vue:_
_Para instalar los paquetes y dependencias necesarias en vuejs debemos correr el siguiente comando_

```sh
$ npm install
```

_Este comando inicia nuestro proyecto localmente, descarga todas las librerias y sus dependencias descritas en el package.json_
_Se agrego un package.json con todos los paquetes necesarios para usar vue, webpack, cross-env, routing, axios._
_Se genero un archivo webpack.mix.js donde se declara que archivos se compilaran y la carpeta destino._

## Desarrollando localmente ⚙️

_Para desarrollo local, es mas comodo trabajar con el compilador observando cambios,_
_para ello, podemos correr el siguiente comando:_

```sh
$ npm run watch
```

_El cual tomara la terminal (ejecutar el comando en una terminal exclusiva) y observara_
_los cambios en vivo en el codigo (Vue), compilando cuando fuese necesario el codigo_
_quedando asi listo para el testeo local de los componentes._

_Para compilar el proyecto para desarrollo (incluye warnings y errors para development)_
_correr el siguiente comando:_

```sh
$ npm run dev
```

## Comandos utiles para git 🖥️

_Comandos utiles para utilizar git, para branch personales y para merge con el proyecto en la nube_

_Para clonar repositorio:_
```sh
$ git clone {url repositorio}
```

## Deployment 📦

_Para compilar el proyecto para produccion (se hace caso omiso de warnings)_
_ejecutar el siguiente comando:_

```sh
$ npm run prod
```
# webColombia
