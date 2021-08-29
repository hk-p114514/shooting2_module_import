import { screen_w, vars } from '../../../init/variables';

const bossInfo = (vctx: CanvasRenderingContext2D | null, gap: number) => {
	//ボスのHPを表示
	if (vars.bossHp > 0) {
		//HPバーのサイズ
		const size = ((screen_w - gap * 2) * vars.bossHp) / vars.bossMhp;
		const maxSize = screen_w - gap * 2;

		if (vctx) {
			//残りHPを表示
			vctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
			vctx.fillRect(vars.camera_x + gap, vars.camera_y + gap, size, gap);

			//バーの枠を表示
			vctx.strokeStyle = 'yellow';
			vctx.strokeRect(vars.camera_x + gap, vars.camera_y + gap, size, gap);

			//最大HPを示す枠
			vctx.strokeRect(vars.camera_x + gap, vars.camera_y + gap, maxSize, gap);
		}
	}
};

export { bossInfo };
