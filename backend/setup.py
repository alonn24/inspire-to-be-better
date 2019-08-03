#!/usr/bin/env python
from setuptools import find_packages
import os
try:  # for pip >= 10
    # noinspection PyProtectedMember
    from pip._internal.req import parse_requirements
except ImportError:  # for pip <= 9.0.3
    from pip.req import parse_requirements
from setuptools import setup, Command

# DIR_NAME = os.path.dirname(os.path.abspath(_file_))
# VERSION_FILE = os.path.join(DIR_NAME, "VERSION.txt")

# parse_requirements() returns generator of pip.req.InstallRequirement objects
install_reqs = parse_requirements("requirements.txt", session=False)
reqs = [str(ir.req) for ir in install_reqs]


setup(name='inspire_to_be_better-apis',
      # version=get_version_from_file(VERSION_FILE),
      version='1.0',
      author="Tzahi Furmanski",
      author_email="tzahi.fur@gmail.com",
      packages=find_packages(),
      install_requires=reqs)
