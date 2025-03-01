export const frontend = new sst.aws.Nextjs("Frontend", {
    path: "packages/frontend",
    dev: {
        command: "bun run dev",
    },
    openNextVersion: '3.4.2',
    domain:
		$app.stage === 'production'
			? 'p3.ajani.me'
			: undefined

})