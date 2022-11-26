import pathlib

SMALL_VEC_LEN = 3
MID_VEC_LEN = 1_000
LARGE_VEC_LEN = 1_000_000



TEST_DATA_DIR = pathlib.Path(__file__).resolve().parent / 'data'


def get_tiny_def():
    return str(TEST_DATA_DIR / "tinydef.txt")