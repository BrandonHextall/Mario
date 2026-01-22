import {preRenderAsset} from "./preRender.mjs";
import {array} from "./tilemaps.mjs";
export var preRenderedAssets = {
    mario: {
        small: {
            normal: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null)
                }
            },
            flower: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null)
                }
            },
            star: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null)
                }
            }
        },
        big: {
            normal: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                crouch: preRenderAsset(null, null),
                throw: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null),
                    6: preRenderAsset(null, null)
                }
            },
            flower: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                crouch: preRenderAsset(null, null),
                throw: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null),
                    6: preRenderAsset(null, null)
                }
            },
            star: {
                stand: preRenderAsset(null, null),
                walk: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                skid: preRenderAsset(null, null),
                jump: preRenderAsset(null, null),
                crouch: preRenderAsset(null, null),
                throw: preRenderAsset(null, null),
                death: preRenderAsset(null, null),
                flagpole: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null)
                },
                swim: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null),
                    5: preRenderAsset(null, null),
                    6: preRenderAsset(null, null)
                }
            }
        },
        growShrink: {
            normal: {
                standing: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                jumping: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null)
                }
            },
            flower: {
                standing: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                jumping: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null)
                }
            },
            star: {
                standing: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null)
                },
                jumping: {
                    1: preRenderAsset(null, null),
                    2: preRenderAsset(null, null),
                    3: preRenderAsset(null, null),
                    4: preRenderAsset(null, null)
                }
            }
        }
    }
}