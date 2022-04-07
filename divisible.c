#include <stdio.h>
#include <math.h>

int main(int argc, char *argv[]) {
  int a = 2;
  int b = 4;
  printf("%s\n", a % b == 0 || b % a == 0 ? "verdadero" : "falso");
  return 0;
}
