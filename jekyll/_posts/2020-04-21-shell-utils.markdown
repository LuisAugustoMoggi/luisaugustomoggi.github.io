---
layout: post
title:  "Shell Utils"
date:   2020-04-21 11:39:02 -0500
categories: shell
---
Alguns comandos shell pra facilitar a vida

# Replace de Strings 
#### Script
``` 
  texto="abc123"
  de="abc"
  para="def"
  replace=`echo $texto | sed -e "s/$de/$para/g"` 
  echo $replace
```
#### Resultado
```
  $ def123
```

# Declarar variáveis dinâmicas
#### Script
```
  nome="minha_var"
  valor="valor de var"
  eval "$nome"="$valor"
  echo $minha_var
```
#### Resultado
```
  $ valor de var
```

# Lendo Parametros em um script shell
#### Script
```
function set {
    _command=`echo $1 | sed -e "s/-//g"`
    eval "$_command"="$2"
}

function read_parameter {
    if [[ $1 == *"$2"* ]];then
        key=`echo $1 | cut -d = -f1`
        value=`echo $1 | cut -d = -f2`
        set "$key" "$value"
    fi
}

for _param in $*; do 
    read_parameter $_param "--class" 
    read_parameter $_param "--baseUrl"    
    read_parameter $_param "-t"     
done

echo $class
echo $baseUrl
echo $t

```
#### Resultado
```
  $ ./meu_script --class=teste --baseUrl=localhost -t=10
  ------------------
  teste
  localhost
  10
```

# String uppercase
#### Script
```
  texto="tudo minusculo"
  echo ${texto^^}
```
#### Resultado
```
  $ TUDO MINUSCULO
```