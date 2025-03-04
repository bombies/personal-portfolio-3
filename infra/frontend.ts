export const frontend = new sst.aws.Nextjs("Frontend", {
    path: "packages/frontend",
    dev: {
        command: "bun run dev",
    },
    openNextVersion: '3.5.1',
    domain:
		$app.stage === 'production'
			? 'ajani.me'
			: undefined

})