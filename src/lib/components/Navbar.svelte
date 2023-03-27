<header aria-label="Site Header" class="bg-white dark:bg-gray-900 border-b shadow-sm">
	<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
		<a class="block text-teal-600 dark:text-teal-300" href="/">
			<span class="sr-only">Home</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 text-blue-500"
			>
				<path
					fill-rule="evenodd"
					d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>

		<div class="flex flex-1 items-center justify-end md:justify-between">
			<nav aria-label="Site Nav" class="hidden md:block">
				<ul class="flex items-center gap-6 text-sm">
					<li>
						<a
							class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
							href="/"
						>
							Home
						</a>
					</li>
                    <li>
						<a
							class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
							href="/prompts"
						>
							Prompts
						</a>
					</li>
				</ul>
			</nav>

			<div class="flex items-center gap-4">
				<div class="sm:flex sm:gap-4">
					<!-- <a
              class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
              href="/"
            >
              Login
            </a>

            <a
              class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 sm:block"
              href="/"
            >
              Register
            </a> -->
				</div>

				<button
					class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
				>
					<span class="sr-only">Toggle menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>
