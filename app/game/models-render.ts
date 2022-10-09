import { allModels, levers, souls } from "./models";
import { absoluteTime, mainMenuVisible } from "./game-time";
import { matrixCopy, matrixToArray, tempMatrix } from "../math/matrix";
import { gl } from "../gl";
import { worldMatricesBuffer, objectsMatricesBuffer } from "./models-matrices";
import type { MODEL_ID_SOUL, MODEL_ID_SOUL_COLLISION } from "./models-ids";
import { MODEL_ID_PLAYER_BODY, MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1, MODEL_ID_LEVER } from "./models-ids";

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  soulModelId: typeof MODEL_ID_SOUL | typeof MODEL_ID_SOUL_COLLISION,
) => {
  if (mainMenuVisible) {
    if (hC.width > 1100) {
      matrixCopy().rotateSelf(0, 40 * Math.sin(absoluteTime) - 80, -8);

      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_BODY - 2);
      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_LEG0 - 2);
      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_LEG1 - 2);

      gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
      gl.drawElements(
        gl.TRIANGLES,
        allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
        gl.UNSIGNED_SHORT,
        allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
      );
    }

    return;
  }

  gl.uniformMatrix4fv(worldMatrixLoc, false, objectsMatricesBuffer);

  // Render souls

  gl.drawElementsInstanced(
    gl.TRIANGLES,
    allModels[soulModelId]!.$vertexEnd! - allModels[soulModelId]!.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    allModels[soulModelId]!.$vertexBegin! * 2,
    souls.length,
  );

  // Render levers

  gl.drawElementsInstanced(
    gl.TRIANGLES,
    allModels[MODEL_ID_LEVER]!.$vertexEnd! - allModels[MODEL_ID_LEVER]!.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    allModels[MODEL_ID_LEVER]!.$vertexBegin! * 2,
    levers.length,
  );

  // Render world

  gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);

  gl.drawElements(
    gl.TRIANGLES,
    (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! : allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!) - 3,
    gl.UNSIGNED_SHORT,
    3 * 2,
  );
};
