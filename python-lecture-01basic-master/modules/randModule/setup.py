from setuptools import setup

# with open("README.md", "r") as fh:
#     long_description = fh.read()

setuptools.setup(
    name="rand-int-list",
    version="0.0.1",
    author="sunday00",
    author_email="kind65505256@grayfield.net",
    description="sample",
    license = "MIT",
    # long_description=long_description,
    # long_description_content_type="text/markdown",
    # url="https://github.com/pypa/sampleproject",
    # packages=setuptools.find_packages(),
    packages=['.'],
    # classifiers=[
    #     "Programming Language :: Python :: 3",
    #     "License :: OSI Approved :: MIT License",
    #     "Operating System :: OS Independent",
    # ],
    install_requires = [],
    python_requires='>=3.7',
    zip_safe=False
)