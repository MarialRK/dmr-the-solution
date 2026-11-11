import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Wording overrides and hidden-service choices for retired services are removed, because those services no longer exist.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "service_texts" ALTER COLUMN "service" SET DATA TYPE text;
  DELETE FROM "service_texts" WHERE "service" NOT IN ('graphic-design-branding', 'website-design-development', 'business-presentations-documentation', 'digital-branding-communication', 'software-technology-solutions', 'professional-writing-editing', 'digital-business-consultancy', 'personal-executive-branding');
  DROP TYPE "public"."enum_service_texts_service";
  CREATE TYPE "public"."enum_service_texts_service" AS ENUM('graphic-design-branding', 'website-design-development', 'business-presentations-documentation', 'digital-branding-communication', 'software-technology-solutions', 'professional-writing-editing', 'digital-business-consultancy', 'personal-executive-branding');
  ALTER TABLE "service_texts" ALTER COLUMN "service" SET DATA TYPE "public"."enum_service_texts_service" USING "service"::"public"."enum_service_texts_service";
  ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE text;
  DELETE FROM "site_settings_hidden_services" WHERE "value" NOT IN ('graphic-design-branding', 'website-design-development', 'business-presentations-documentation', 'digital-branding-communication', 'software-technology-solutions', 'professional-writing-editing', 'digital-business-consultancy', 'personal-executive-branding');
  DROP TYPE "public"."enum_site_settings_hidden_services";
  CREATE TYPE "public"."enum_site_settings_hidden_services" AS ENUM('graphic-design-branding', 'website-design-development', 'business-presentations-documentation', 'digital-branding-communication', 'software-technology-solutions', 'professional-writing-editing', 'digital-business-consultancy', 'personal-executive-branding');
  ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE "public"."enum_site_settings_hidden_services" USING "value"::"public"."enum_site_settings_hidden_services";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "service_texts" ALTER COLUMN "service" SET DATA TYPE text;
  DELETE FROM "service_texts" WHERE "service" NOT IN ('graphic-design-branding', 'business-cards', 'social-media-management', 'ai-video-production', 'website-design-development', 'software-digital-solutions', 'business-documentation', 'professional-writing', 'consultancy', 'esg-advisory');
  DROP TYPE "public"."enum_service_texts_service";
  CREATE TYPE "public"."enum_service_texts_service" AS ENUM('graphic-design-branding', 'business-cards', 'social-media-management', 'ai-video-production', 'website-design-development', 'software-digital-solutions', 'business-documentation', 'professional-writing', 'consultancy', 'esg-advisory');
  ALTER TABLE "service_texts" ALTER COLUMN "service" SET DATA TYPE "public"."enum_service_texts_service" USING "service"::"public"."enum_service_texts_service";
  ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE text;
  DELETE FROM "site_settings_hidden_services" WHERE "value" NOT IN ('graphic-design-branding', 'business-cards', 'social-media-management', 'ai-video-production', 'website-design-development', 'software-digital-solutions', 'business-documentation', 'professional-writing', 'consultancy', 'esg-advisory');
  DROP TYPE "public"."enum_site_settings_hidden_services";
  CREATE TYPE "public"."enum_site_settings_hidden_services" AS ENUM('graphic-design-branding', 'business-cards', 'social-media-management', 'ai-video-production', 'website-design-development', 'software-digital-solutions', 'business-documentation', 'professional-writing', 'consultancy', 'esg-advisory');
  ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE "public"."enum_site_settings_hidden_services" USING "value"::"public"."enum_site_settings_hidden_services";`)
}
