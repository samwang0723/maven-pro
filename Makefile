.PHONY: test lint bench lint-skip-fix migrate proto build build-docker

help: ## show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

PROJECT_NAME?=core
APP_NAME?=maven
VERSION?=v0.1.0

SHELL = /bin/bash

docker-build: docker-m1 ## build docker image in M1 device
	@printf "\nyou can now deploy to your env of choice:\ncd deploy\nENV=dev make deploy-latest\n"

docker-m1:
	@echo "[docker build] build local docker image on Mac M1"
	@docker build \
		-t samwang0723/$(APP_NAME):$(VERSION) \
		--build-arg LAST_MAIN_COMMIT_HASH=$(LAST_MAIN_COMMIT_HASH) \
		--build-arg LAST_MAIN_COMMIT_TIME=$(LAST_MAIN_COMMIT_TIME) \
		-f deployment/Dockerfile .

docker-amd64-deps:
	@echo "[docker buildx] install buildx dependency"
	@docker buildx create --name m1-builder
	@docker buildx use m1-builder
	@docker buildx inspect --bootstrap

docker-amd64:
	@echo "[docker buildx] build amd64 version docker image for Ubuntu AWS EC2 instance"
	@docker buildx use m1-builder
	@docker buildx build \
		--load --platform=linux/amd64 \
		-t samwang0723/$(APP_NAME):$(VERSION) \
		--build-arg LAST_MAIN_COMMIT_HASH=$(LAST_MAIN_COMMIT_HASH) \
		--build-arg LAST_MAIN_COMMIT_TIME=$(LAST_MAIN_COMMIT_TIME) \
		-f deployment/Dockerfile .

#############
# changelog #
#############

MOD_VERSION = $(shell git describe --abbrev=0 --tags `git rev-list --tags --max-count=1`)

MESSAGE_CHANGELOG_COMMIT="chore(changelog): update CHANGELOG.md for $(MOD_VERSION)"

changelog-gen: ## generates the changelog in CHANGELOG.md
	@git cliff -o ./CHANGELOG.md && \
	printf "\nchangelog generated!\n"
	git add CHANGELOG.md

changelog-commit:
	git commit -m $(MESSAGE_CHANGELOG_COMMIT) ./CHANGELOG.md

