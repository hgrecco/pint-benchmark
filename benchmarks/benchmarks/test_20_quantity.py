import pytest

import itertools as it
import operator

import pint

from . import util

units = ("meter", "kilometer", "second", "minute", "angstrom")
all_values = ("int", "float", "complex")
all_values_q = tuple(
    "%s_%s" % (a, b) for a, b in it.product(all_values, ("meter", "kilometer"))
)

op1 = (operator.neg, operator.truth)
op2_cmp = (operator.eq,)  # operator.lt)
op2_math = (operator.add, operator.sub, operator.mul, operator.truediv)

def basic_setup():

    data = {}

    data["int"] = 1
    data["float"] = 1.0
    data["complex"] = complex(1, 2)

    ureg = pint.UnitRegistry(util.get_tiny_def())

    for key in all_values:
        data[key + "_meter"] = data[key] * ureg.meter
        data[key + "_kilometer"] = data[key] * ureg.kilometer

    return  ureg, data


@pytest.mark.parametrize("key", all_values)
def test_build_by_mul(benchmark, key):
    try:
        ureg, data = basic_setup()
        benchmark(lambda value: value * ureg.meter, data[key])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("key", all_values)
@pytest.mark.parametrize("op", op1)
def test_op1(benchmark, key, op):
    try:
        ureg, data = basic_setup()
        benchmark(op, data[key])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)

@pytest.mark.parametrize("keys", tuple(it.product(all_values_q, all_values_q)))
@pytest.mark.parametrize("op", op2_math + op2_cmp)
def test_op2(benchmark, keys, op):
    try:
        ureg, data = basic_setup()
        key1, key2 = keys
        benchmark(op, data[key1], data[key2])
    except Exception as ex:
        benchmark.extra_info['exception'] = str(ex)
