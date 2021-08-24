import { database } from '../../database';
import { canvas } from '../../init/variables';
import { deleteCanvas } from './deleteCanvas';

export const finishRound = (callData: number): void => {
	deleteCanvas(canvas);
	if (callData === 0) {
		database();
	}
};
