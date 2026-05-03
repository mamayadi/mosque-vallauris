# ══════════════════════════════════════════════════════════════════
#  Mosquée de Vallauris — Makefile
#  Usage : make <target>
# ══════════════════════════════════════════════════════════════════

.PHONY: help \
        dev build preview favicon \
        docker-dev docker-build docker-up docker-down docker-logs docker-shell docker-clean \
        deploy lint check

# ──────────────────────────────────────────────
#  Default target — print help
# ──────────────────────────────────────────────
help:
	@echo ""
	@echo "  ╔══════════════════════════════════════════╗"
	@echo "  ║   Mosquée de Vallauris — Makefile        ║"
	@echo "  ╚══════════════════════════════════════════╝"
	@echo ""
	@echo "  ── Local development ──────────────────────"
	@echo "  make dev          Start Astro dev server (localhost:4321)"
	@echo "  make build        Generate favicons + production build"
	@echo "  make preview      Preview production build locally"
	@echo "  make favicon      Regenerate PNG favicons from favicon.svg"
	@echo ""
	@echo "  ── Docker ─────────────────────────────────"
	@echo "  make docker-dev   Start dev server via docker-compose (hot-reload)"
	@echo "  make docker-build Build Docker image"
	@echo "  make docker-up    Start container in background"
	@echo "  make docker-down  Stop and remove containers"
	@echo "  make docker-logs  Stream container logs"
	@echo "  make docker-shell Open a shell inside the running container"
	@echo "  make docker-clean Remove image + volumes"
	@echo ""
	@echo "  ── CI / Quality ───────────────────────────"
	@echo "  make check        Type-check with astro check"
	@echo "  make deploy       Push main branch → triggers GitHub Actions"
	@echo ""

# ──────────────────────────────────────────────
#  Local development
# ──────────────────────────────────────────────
dev:
	npm run dev

favicon:
	npm run favicon

build: favicon
	npm run build

preview: build
	npm run preview

# ──────────────────────────────────────────────
#  Docker
# ──────────────────────────────────────────────
IMAGE_NAME = mosquee-vallauris

docker-dev:
	docker compose up

docker-build:
	docker build -t $(IMAGE_NAME) .

docker-up:
	docker compose up -d

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f

docker-shell:
	docker compose exec web sh

docker-clean:
	docker compose down -v --rmi local
	docker image rm -f $(IMAGE_NAME) 2>/dev/null || true

# ──────────────────────────────────────────────
#  CI / Quality
# ──────────────────────────────────────────────
check:
	npx astro check

deploy:
	git push origin main
