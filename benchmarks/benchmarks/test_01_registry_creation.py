import pytest

import pint

from . import util


@pytest.mark.parametrize("args",
                         [(None,), tuple(), (util.get_tiny_def(),), ("", None)],
                         ids=("None", "tuple()", "tiny def", "No cache"))
def test_create_registry(benchmark, args):
    try:
        if len(args) == 2:
            benchmark(pint.UnitRegistry, args[0], cache_folder=args[1])
        else:
            benchmark(pint.UnitRegistry, *args)
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)
