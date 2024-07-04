#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
//p.260, 261변형 => 문자열 비교

struct tree {
	char* word;
	struct key* left;
	struct key* right;
};

int Insert_node(struct tree* root, char * word);
struct tree* search(struct tree* root, char*word);
void inorder(struct tree* root); // 중위

int main() {
	int word[15];
	struct tree* root = NULL, * find;
	printf("input word >>");
	scanf("%s", word);
	while (strcmp(word, "quit")) {
		if (root) {
			Insert_node(root, word);
		}
		else {
			root = malloc(sizeof(struct tree));
			root->left = root->right = NULL;
			root->word = malloc( (strlen(word)+1)*sizeof(char) );
			strcpy(root->word, word);
		}
		printf("input word >>");
		scanf("%s", word);
	}
	printf("inorder\n");
	inorder(root);

	printf("input word to find >>");
	scanf("%s", word);
	find = search(root, word);
	if (find) {
		printf("%s\n", find->word);
	}
	else {
		printf("404 not found\n");
	}
}

int Insert_node(struct tree* root, char* word) {
	// root 값은 이미 설정 되었음
	struct tree* tptr = root, * before = NULL, * node;
	int cmp;
	while (tptr) {
		before = tptr;
		cmp = strcmp(tptr->word, word);
		if (cmp == 1)
			tptr = tptr->left;
		else if (cmp == -1)
			tptr = tptr->right;
		else
			return 0;
	}

	tptr = malloc(sizeof(struct tree));
	tptr->left = tptr->right = NULL;
	tptr->word = malloc((strlen(word) + 1) * sizeof(char));
	strcpy(tptr->word, word);

	if (cmp == 1)
		before->left = tptr;
	else
		before->right = tptr;
	return 1;
}

struct tree* search(struct tree* root, char* word) {
	int cmp;
	while (root) {
		cmp = strcmp(root->word, word);
		if (!cmp)
			return root;
		else if (cmp == 1)
			root = root->left;
		else
			root = root->right;
	}
	return NULL;
}

void inorder(struct tree* root) {
	if (root) {
		inorder(root->left);
		printf("%s\n", root->word);
		inorder(root->right);
	}
}