# Reduire la taille des images

Utilisation de l'outil ImageMagick pour redimensionner les images et les convertir en webp avec une qualité de 85% et une resolution de 1920x1080.

```sh
find . -type f \( -iname "*.jpg" -o -iname "*.png" \) -exec sh -c 'magick "$1" -quality 85 -define webp:preset=photo -resize "1920x1080>" "${1%.*}.webp"' sh {} \;
```

```sh
find . -type f \( -name "*.jpg" -o -name "*.png" \) -delete
```

```sh
sed -i 's/\(\.jpg\|\.png\)/.webp/g' index.html
```