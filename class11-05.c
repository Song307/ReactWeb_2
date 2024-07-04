#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
// 학생 학번 점수 입력 + 4.0이상 학생 출력 함수 구현 + file 처리

struct tree {
	int key;
	float score;
	struct key* left;
	struct key* right;
};

int Insert_node(struct tree* root, int key, float score);
struct tree* search(struct tree* root, int key);
void inorder(struct tree* root); // 중위

int main(int arg, char* args[]) {
	FILE *file = fopen(args[1], "r");
	int key; float score;
	struct tree* root = NULL, * find;
	fscanf(file, "%d %f", &key, &score);
	while (key) {
		if (root) {
			Insert_node(root, key, score);
		}
		else {
			root = malloc(sizeof(struct tree));
			root->left = root->right = NULL;
			root->key = key;
			root->score = score;
		}
		fscanf(file, "%d %f", &key, &score);
	}

	printf("inorder\n");
	inorder(root);

	printf("input id to find >>");
	scanf("%d", &key);
	find = search(root, key);
	if (find) {
		printf("%d %f\n", find->key, find->score);
	}
	else {
		printf("404 not found\n");
	}
}

int Insert_node(struct tree* root, int key, float score) {
	// root 값은 이미 설정 되었음
	struct tree* tptr = root, * before = NULL, * node;

	while (tptr) {
		before = tptr;
		if (key < tptr->key)
			tptr = tptr->left;
		else if (key > tptr->key)
			tptr = tptr->right;
		else
			return 0;
	}

	tptr = malloc(sizeof(struct tree));
	tptr->left = tptr->right = NULL;
	tptr->key = key; tptr->score = score;

	if (key < before->key)
		before->left = tptr;
	else
		before->right = tptr;
	return 1;
}

struct tree* search(struct tree* root, int key) {
	while (root) {
		if (root->key == key)
			return root;
		else if (root->key > key)
			root = root->left;
		else
			root = root->right;
	}
	return NULL;
}

void inorder(struct tree* root) {
	if (root) {
		inorder(root->left);
		printf("%d %f\n", root->key, root->score);
		inorder(root->right);
	}
}