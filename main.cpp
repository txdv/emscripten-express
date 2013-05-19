/* vim: set tabstop=2 shiftwidth=2 noexpandtab: */

#include <stdio.h>

typedef void (*express_callback)(void *request, void *response);

extern "C" {
	extern void exit(int status);
	extern void *express_create_server();
	extern void express_close(void *context);
	extern void express_post(void *context, char *route, express_callback callback);
	extern void express_listen(void *context, int port);
}

void handle_update(void *request, void *response)
{
	printf("Hello World!\n");
}

int main()
{
	void *context = express_create_server();
	express_listen(context, 8000);
	express_post(context, "update", &handle_update);
	return 0;
}

