const printInfo = (
	infos: string[],
	startX: number,
	startY: number,
	heightGap: number,
	ctx: CanvasRenderingContext2D,
): number => {
	let height = startY;
	infos.forEach((info: string) => {
		ctx.fillText(info, startX, height);
		height -= heightGap;
	});

	return height - heightGap;
};

export { printInfo };
