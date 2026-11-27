import { openWorkbookSession } from '@neonflower/sheet-core';
import { createWorkbookEditPeer, hydratePeer } from '@neonflower/sheet-core/worker';

export const editableWorkbookSessionBackend = {
  open: openWorkbookSession,
  hydrate: hydratePeer,
  attach: createWorkbookEditPeer,
};
