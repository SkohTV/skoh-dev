#!/usr/bin/env python

from PIL import Image


def main() -> None:
  pics = range(1, 78+1)

  for i in pics:
    path = f'./static/ae/imgs/crab_pic/{i}.jpg'
    img = Image.open(path)
    new_img = img.resize((225, 300))
    new_img.save(path)
    print(f'Resized img {i}.jpg')




if __name__ == "__main__":
  main()

